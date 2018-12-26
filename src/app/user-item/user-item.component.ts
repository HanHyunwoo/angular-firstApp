import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent implements OnInit {
  // 컴포넌트에 프로퍼티가 만들어지면, 템플릿 문법을  적용하여 템플릿에서 그 값을 표시할 수 있다. 
  // name이라는 property 추가(지역 변수), UserItemComponent의 모든 인스턴스에 name 프로퍼티를 지정한다. 
  name: string; 
  
  constructor() { // UserItemComponent 이 클래스의 새 인스턴스를 만들 때마다 호출되는 함수
    this.name = 'Hyunwoo';
   }

  ngOnInit() {
  }

}
