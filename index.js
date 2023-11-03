import * as contactsService from "./contacts.js"
import { program } from 'commander';

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
          const contacts = await contactsService.listContacts();
          console.log(contacts);
      break;

    case 'get':
          const contact = await contactsService.getContactsById(id);
          console.log(contact);
      break;

    case 'add':
          const addContact = await contactsService.addContact(name, email, phone);
          console.log(addContact);
      break;

    case 'remove':
          const removeContact = await contactsService.removeContactById(id);
          console.log(removeContact);
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

program
    .option("-a, --action <type>")
    .option("-i, --id <type>")
    .option("-n, --name <type>")
    .option("-e, --email <type>")
    .option("-p, --phone <type>");

program.parse();

const options = program.opts();

invokeAction(options);