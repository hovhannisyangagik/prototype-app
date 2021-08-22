import { Component, OnInit } from '@angular/core';
import { BackgroundMode } from '@ionic-native/background-mode/ngx';
import { Contacts, ContactFieldType, IContactFindOptions } from '@ionic-native/contacts';
import { WebView } from '@ionic-native/ionic-webview/ngx';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  contactsFound: any[] = []

  contactType: ContactFieldType[] = [
    'id',
    'displayName',
    'nickname',
    'phoneNumbers',
    'emails',
    'region',
    'streetAddress',
    'photos',
    'organizations'
  ]

  avatar: any

  constructor(
    private contacts: Contacts,
    private webView: WebView,
    private backroundMode: BackgroundMode
  ) { }

  ngOnInit() {
    this.backroundMode.enable()
    this.getContacts()
  }

  getContacts() {
    const options: IContactFindOptions = {
      multiple: true,
      hasPhoneNumber: true
    }
    this.contacts.find(this.contactType, options).then(c => {
      for (let i = 0; i < c.length; i++) {
        if (c[i].displayName !== null) {
          const contact = {};
          contact['id'] = c[i].id
          contact['name'] = c[i]?.displayName
          contact['nickname'] =  c[i]?.nickname
          contact['numbers'] = c[i]?.phoneNumbers
          contact['mail'] = c[i]?.emails
          contact['region'] = c[i]?.region
          contact['streetAddress'] = c[i]?.streetAddress
          contact['organizations'] = c[i]?.organizations
          if (c[i].photos != null && c[i].photos.length > 0) {
            contact['image'] = this.webView.convertFileSrc(c[i].photos[0].value);
          } else {
            contact['image'] = 'assets/icon-profile-5.jpg';
          }
          this.contactsFound.push(contact);
        }
      }

    })
  }

}
