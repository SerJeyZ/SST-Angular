import { Component, OnInit } from '@angular/core';
import { MultilevelMenuService, MultilevelNodes } from 'ng-material-multilevel-menu';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  config: any;
  
  appitems: MultilevelNodes[] = [
    {
      label: "Доска",
      link:"/system/dashboard",
      icon: "home"
    },
    {
      label: "Работа",
      faIcon: "fa fa-th-large",
      items: [
        {
          label: "Логи времени",
          link: "/system/timer",
        },
        {
          label: "Календарь",
          link: "/system/calendar",
        },
        {
          label: "Назначеные задачи",
          link: "/system/tasks",
        },
      ],
    },
    {
      label: "Отчёты",
      faIcon: "fa fa-area-chart",
      items: [
        {
          label: "Создать отчёт",
          link: "/system/create-report",
        },
        {
          label: "Список отчётов компании",
          link: "/system/reports",
        },
      ],
    },
    {
      label: "Компания",
      faIcon: "fa fa-table",
      items: [
        {
          label: "Список работников",
          link: "/system/staff-list",
        },
        {
          label: "Профиль компании",
          link: "/system/company-profile",
        },
        {
          label: "Заказчики",
          link: "/system/customers-list",
        },
      ],
    },
  ];
  constructor(
    private multilevelMenuService: MultilevelMenuService,
  ) { }

  ngOnInit() {
    this.config = {
      paddingAtStart: false,
      interfaceWithRoute: true,
      highlightOnSelect:true,
      useDividers: false,
      collapseOnSelect: false,
      classname: 'sidebar-main-menu',
      listBackgroundColor: '#3a4651',
      fontColor: 'rgba(255, 255, 255, 0.5)',
      // selectedListFontColor: '#ffffff',
    };
  }
  selectedItem($event) {
    console.log($event)
  }
  selectedLabel($event) {
    console.log($event)
  }
}
