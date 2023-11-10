import { Component } from '@angular/core';

@Component({
  selector: 'app-helpcenter',
  templateUrl: './helpcenter.component.html',
  styleUrls: ['./helpcenter.component.css']
})
export class HelpcenterComponent {
  data ={
    title : '<h1>Test</h1><script>alert("Attack")</script>'
  }

  onTitleClicked(){
    alert('Welcome to Hack A Boss');
  }

  onKeyUpTitle(newTitle: string){
    this.data.title = newTitle;
  }
}
