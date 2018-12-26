import { 
  Component, 
  OnInit,
  Input
 } from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent implements OnInit {
  // 컴포넌트에 프로퍼티가 만들어지면, 템플릿 문법{{ }}을 적용하여 템플릿에서 그 값을 표시할 수 있다. 
  // name이라는 property 추가(지역 변수), UserItemComponent의 모든 인스턴스에 name 프로퍼티를 지정한다. 
  // name: string; 

  // UserItemComponent를 '자식 컴포넌트'로 사용하여 name렌더링하는 방법
  // 1. (템플릿에서) UserItemComponent를 렌더링할 수 있도록 UserListComponent를 설정한다. 
  // 2. name 변수를 '입력'으로 받을 수 있도록 UserItemComponent를 설정한다.
  // 3. UserItemComponent에 이름을 전달할 수 있도록 UserListComponent 템플릿을 설정한다. 

  @Input() name: string;  // 부모 템플릿으로부터 값을 전달 받을 수 있다.
  
  constructor() { // UserItemComponent 이 클래스의 새 인스턴스를 만들 때마다 호출되는 함수
    // this.name = 'Hyunwoo';
   }

  ngOnInit() {
  }

}
