import {Component, signal} from '@angular/core';
import {Router} from "@angular/router";
import {Button} from "primeng/button";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {FloatLabelModule} from "primeng/floatlabel";
import {InputTextareaModule} from "primeng/inputtextarea";
import {DialogModule} from "primeng/dialog";
import {HttpClientModule} from "@angular/common/http";
import {MyMessageService} from "../service/myMessage.service";

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [
    HttpClientModule,
    Button,
    ReactiveFormsModule,
    InputTextModule,
    FloatLabelModule,
    InputTextareaModule,
    DialogModule
  ],
  templateUrl: './message.component.html',
  styleUrl: './message.component.css',
  providers: [MyMessageService]
})
export class MessageComponent {
  public showEmptyTextErrorMessage = signal(false);
  public showEmptyLastnameErrorMessage = signal(false);
  public isNameDirty = signal(false);
  public isMessageDirty = signal(false);
  public messageDetails: FormGroup;
  public visible = false;
  public showErrorDialog = false;
  public showConfirmationDialog = false;
  public readonly emptyLastnameErrorMessage = signal<string>('Veuillez entrer votre nom et/ou prénom svp.');
  public readonly emptyTextErrorMessage = signal<string>('Veuillez laisser un message svp.');
  private regex = /[a-zA-Z0-9]/;

  constructor(private router: Router, private fb: FormBuilder, private myMessageService: MyMessageService) {
    this.messageDetails = this.fb.group({
      name: ['', Validators.required],
      message: ['', Validators.required],
    })
  }

  public navigateToGoldBook(): void {
    if(!this.regex.test(this.messageDetails.value.name)){
      this.showEmptyLastnameErrorMessage.set(true);
      this.isNameDirty.set(true);
    }
    if(!this.regex.test(this.messageDetails.value.message)){
      this.showEmptyTextErrorMessage.set(true)
      this.isMessageDirty.set(true);
    }
    if(this.messageDetails.valid){
      this.visible = true;
    //  this.router.navigate(['mariage-dalia-et-mickayel-livre-dor']);
    }

  }

  public saveMessage(): void {
    this.myMessageService.saveMessage(this.messageDetails.value).subscribe({
      next: () => {
        this.showConfirmationDialog = true;
        this.showErrorDialog = false;
        this.visible = false;
      },
      error: () => {
       this.showErrorDialog = true;
        this.showConfirmationDialog = false;
        this.visible = false;
      },
    });
  }

  closeConfirmationDialog(){
    this.showConfirmationDialog=false;
    this.router.navigate(['mariage-dalia-et-mickayel-livre-dor']);
  }

  closeErrorDialog(){
    this.showErrorDialog=false;
    this.router.navigate(['mariage-dalia-et-mickayel-laisser-un-message']);
  }

  public closeDialog() {
    this.visible = false;
  }

  public onLastnameInput(event: Event){
    const eventValue = event.target as HTMLInputElement;
    if(this.regex.test(eventValue.value)){
      this.isNameDirty.set(false)
      this.showEmptyLastnameErrorMessage.set(false)
    }
    this.updateStepValidity();
  }

  public onLastnameBlur(event: Event){
    const eventValue = event.target as HTMLInputElement;
    if(!this.regex.test(eventValue.value)){
      this.isNameDirty.set(true)
    }
    this.updateStepValidity();
  }

  public onMessageBlur(event: Event){
    const eventValue = event.target as HTMLInputElement;
    if(!this.regex.test(eventValue.value)){
      this.isMessageDirty.set(true)
    }
    this.updateStepValidity();
  }

  public onMessageInput(event: Event){
    const eventValue = event.target as HTMLInputElement;
    if(this.regex.test(eventValue.value)){
      this.showEmptyTextErrorMessage.set(false)
      this.isMessageDirty.set(false)
    }
    this.updateStepValidity();
  }

  updateStepValidity(){
    if(this.messageDetails.valid){
   //   this.signUpService.setFirstStepValues(this.loginData)
    }
  }
}
