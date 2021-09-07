import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Главная', url: '/home', icon: 'home' },
    { title: 'Автопарк', url: '/autopark', icon: 'truck' },
    { title: 'Автосервис', url: '/autoservice', icon: 'cog' },
    { title: 'Контакты', url: '/contacts', icon: 'call' },
  ];
  public labels = ['г. Кострома, улица Магистральная 104', '30 автомобилей в собственности', 'Сопровождение 24/7', 'Собственный сервис', 'Магазин автозапчастей'];
  constructor() {}
}
