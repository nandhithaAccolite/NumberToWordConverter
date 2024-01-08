import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  dispaly:boolean=false;
  mynumber!:number;
  outputWords:string='';
  title = 'Converter2';
  singleDigit:string[]=['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen']
  twoDigit:string[]=['ten','twenty','thirty','fourty','fifty','sixty','seventy','eighty','ninety']
  moreDigits:string[]=['hundread','thousand','lakh','million']

  convertToWord(){
    this.dispaly=true;
    if(this.mynumber<20){
      this.outputWords=this.singleDigit[this.mynumber];
    }
    else if(this.mynumber<100){
      this.outputWords = this.twoDigit[(Math.floor(this.mynumber / 10)) - 1] + ' '+((this.mynumber % 10 === 0) ? '' : this.singleDigit[this.mynumber % 10]);
    }
    else if(this.mynumber<1000){
      if(this.mynumber%100===0){
        this.outputWords=this.singleDigit[Math.floor(this.mynumber / 100)] + ' hundred'
      }
      else{
      this.outputWords = this.singleDigit[Math.floor(this.mynumber / 100)] + ' hundred ' + (((Math.floor(this.mynumber / 10) % 10)===0)?'': 'and '+this.twoDigit[(Math.floor(this.mynumber / 10) % 10) - 1])+' '+ ((this.mynumber % 10 === 0) ? '' :   this.singleDigit[this.mynumber % 10]);
    }}
    else if(this.mynumber<10000){
      if(this.mynumber%1000===0){
        this.outputWords=this.singleDigit[Math.floor(this.mynumber / 1000)] + ' thousand '
      }
      else{
      this.outputWords = this.singleDigit[Math.floor(this.mynumber / 1000)] + ' thousand ' + (((Math.floor(this.mynumber / 100) % 10)===0)?'': this.singleDigit[Math.floor(this.mynumber / 100) % 10])+''+ (((Math.floor(this.mynumber / 10) % 10)===0)?'': ' hundread and '+this.twoDigit[(Math.floor(this.mynumber / 10) % 10) - 1])+' '+ ((this.mynumber % 10 === 0) ? '' : this.singleDigit[this.mynumber % 10]);
    }}

    else if(this.mynumber<100000){
      if(this.mynumber%10000===0){
        this.outputWords=this.twoDigit[(Math.floor(this.mynumber / 10000))-1] + ' thousand '
      }
      else{
        this.outputWords=((Math.floor(this.mynumber / 1000))<20)?this.convertToWordBelow20((Math.floor(this.mynumber / 10000))):this.convertToWordBelow100((Math.floor(this.mynumber / 10000)))+
        'thousand'+((this.mynumber % 10000)<1000)?this.convertToWordBelow1000((this.mynumber % 10000)):this.convertToWordBelow100((this.mynumber % 10000));
    }}

    else if (this.mynumber < 100000) {
      if (this.mynumber % 10000 === 0) {
        this.outputWords = this.twoDigit[Math.floor(this.mynumber / 10000) - 1] + ' thousand ';
      } else {
        this.outputWords=((Math.floor(this.mynumber / 1000))<20)?this.convertToWordBelow20((Math.floor(this.mynumber / 10000))):this.convertToWordBelow100((Math.floor(this.mynumber / 10000)))+
        'thousand'+((this.mynumber % 10000)<1000)?this.convertToWordBelow1000((this.mynumber % 10000)):this.convertToWordBelow100((this.mynumber % 10000));
    } 

    }}

    convertToWordBelow20(number:number){
      return this.singleDigit[this.mynumber];
    }
    convertToWordBelow1000(number:number){
      if(this.mynumber%100===0){
        return this.singleDigit[Math.floor(this.mynumber / 100)] + ' hundred'
      }
      else{
      return this.singleDigit[Math.floor(this.mynumber / 100)] + ' hundred ' + (((Math.floor(this.mynumber / 10) % 10)===0)?'': 'and '+this.twoDigit[(Math.floor(this.mynumber / 10) % 10) - 1])+' '+ ((this.mynumber % 10 === 0) ? '' :   this.singleDigit[this.mynumber % 10]);
    }}

    convertToWordBelow100(number:number){
      return this.twoDigit[(Math.floor(this.mynumber / 10)) - 1] + ' '+((this.mynumber % 10 === 0) ? '' : this.singleDigit[this.mynumber % 10]);
    }
  }
  