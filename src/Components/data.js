import todo from '../images/icon-todo.svg';
import calendar from '../images/icon-calendar.svg';
import planning from '../images/icon-planning.svg';
import reminders from '../images/icon-reminders.svg';

export const MenuItems = [
    {
        menu: 'Features',
        submenu : [
            {
                item: 'Todo List',
                icon: todo
            },
            {
                item: 'Calendar',
                icon: calendar
            },
            {
                item: 'Reminders',
                icon: reminders
            },
            {
                item: 'Planning',
                icon: planning
            }
        ]
    },
    {
        menu: 'Company',
        submenu: [
            {item : 'History'},
            {item : 'Our Team'},
            {item : 'Blog'}
        ]
    },
    { menu: 'Careers'},
    {menu: 'About'}
]
