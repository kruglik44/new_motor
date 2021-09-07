import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {

  contactsArray = [
    {data: '+7(4942)32-55-49', icon: 'call-outline'},
    {data: 'oil_krug@mail.ru', icon: 'mail-unread-outline'},
    {data: '+7(910)800-07-98', icon: 'logo-whatsapp'},
    {data: 'kruglov1998', icon: 'logo-skype'},
    {data: 'г. Кострома, ул. Магистральная, д. 105', icon: 'home-outline'},
    {data: 'Код ATI: 516844', icon: 'car-outline'},
  ];
  constructor() { }

  ngOnInit() {}

}
