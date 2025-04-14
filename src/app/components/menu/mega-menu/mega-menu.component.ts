import { Component } from '@angular/core';
import { MegaMenuItem } from 'primeng/api';

@Component({
  selector: 'app-mega-menu',
  templateUrl: './mega-menu.component.html',
  styleUrl: './mega-menu.component.scss'
})
export class MegaMenuComponent {
  items: MegaMenuItem[] | undefined;
  itemsTemplate: MegaMenuItem[] | undefined;

  ngOnInit() {
    this.itemsTemplate = [
      {
        label: 'Company',
        root: true,
        items: [
          [
            {
              items: [
                { label: 'Features', icon: 'pi pi-list', subtext: 'Subtext of item' },
                { label: 'Customers', icon: 'pi pi-users', subtext: 'Subtext of item' },
                { label: 'Case Studies', icon: 'pi pi-file', subtext: 'Subtext of item' }
              ]
            }
          ],
          [
            {
              items: [
                { label: 'Solutions', icon: 'pi pi-shield', subtext: 'Subtext of item' },
                { label: 'Faq', icon: 'pi pi-question', subtext: 'Subtext of item' },
                { label: 'Library', icon: 'pi pi-search', subtext: 'Subtext of item' }
              ]
            }
          ],
          [
            {
              items: [
                { label: 'Community', icon: 'pi pi-comments', subtext: 'Subtext of item' },
                { label: 'Rewards', icon: 'pi pi-star', subtext: 'Subtext of item' },
                { label: 'Investors', icon: 'pi pi-globe', subtext: 'Subtext of item' }
              ]
            }
          ],
          [
            {
              items: [{ image: 'https://primefaces.org/cdn/primeng/images/uikit/uikit-system.png', label: 'GET STARTED', subtext: 'Build spectacular apps in no time.' }]
            }
          ]
        ]
      },
      {
        label: 'Resources',
        root: true
      },
      {
        label: 'Contact',
        root: true
      }
    ];
    this.items = [
      {
        label: 'Furniture',
        icon: 'pi pi-box',
        items: [
          [
            {
              label: 'Living Room',
              items: [{ label: 'Accessories' }, { label: 'Armchair' }, { label: 'Coffee Table' }, { label: 'Couch' }, { label: 'TV Stand' }]
            }
          ],
          [
            {
              label: 'Kitchen',
              items: [{ label: 'Bar stool' }, { label: 'Chair' }, { label: 'Table' }]
            },
            {
              label: 'Bathroom',
              items: [{ label: 'Accessories' }]
            }
          ],
          [
            {
              label: 'Bedroom',
              items: [{ label: 'Bed' }, { label: 'Chaise lounge' }, { label: 'Cupboard' }, { label: 'Dresser' }, { label: 'Wardrobe' }]
            }
          ],
          [
            {
              label: 'Office',
              items: [{ label: 'Bookcase' }, { label: 'Cabinet' }, { label: 'Chair' }, { label: 'Desk' }, { label: 'Executive Chair' }]
            }
          ]
        ]
      },
      {
        label: 'Electronics',
        icon: 'pi pi-mobile',
        items: [
          [
            {
              label: 'Computer',
              items: [{ label: 'Monitor' }, { label: 'Mouse' }, { label: 'Notebook' }, { label: 'Keyboard' }, { label: 'Printer' }, { label: 'Storage' }]
            }
          ],
          [
            {
              label: 'Home Theather',
              items: [{ label: 'Projector' }, { label: 'Speakers' }, { label: 'TVs' }]
            }
          ],
          [
            {
              label: 'Gaming',
              items: [{ label: 'Accessories' }, { label: 'Console' }, { label: 'PC' }, { label: 'Video Games' }]
            }
          ],
          [
            {
              label: 'Appliances',
              items: [{ label: 'Coffee Machine' }, { label: 'Fridge' }, { label: 'Oven' }, { label: 'Vaccum Cleaner' }, { label: 'Washing Machine' }]
            }
          ]
        ]
      },
      {
        label: 'Sports',
        icon: 'pi pi-clock',
        items: [
          [
            {
              label: 'Football',
              items: [{ label: 'Kits' }, { label: 'Shoes' }, { label: 'Shorts' }, { label: 'Training' }]
            }
          ],
          [
            {
              label: 'Running',
              items: [{ label: 'Accessories' }, { label: 'Shoes' }, { label: 'T-Shirts' }, { label: 'Shorts' }]
            }
          ],
          [
            {
              label: 'Swimming',
              items: [{ label: 'Kickboard' }, { label: 'Nose Clip' }, { label: 'Swimsuits' }, { label: 'Paddles' }]
            }
          ],
          [
            {
              label: 'Tennis',
              items: [{ label: 'Balls' }, { label: 'Rackets' }, { label: 'Shoes' }, { label: 'Training' }]
            }
          ]
        ]
      }
    ]
  }
}
