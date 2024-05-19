import { Contact } from '../models/contact';
import { v4 as uuidv4 } from 'uuid';

/**
 * In-memory contact storage.
 */
const contacts: Contact[] = [];

/**
 * Create a new contact.
 * @param contact Contact data to create
 * @returns The created contact with an assigned ID
 */
export const createContact = (contact: Omit<Contact, 'id'>): Contact => {
  const newContact: Contact = { id: uuidv4(), ...contact };
  contacts.push(newContact);
  return newContact;
};

/**
 * Get a contact by ID.
 * @param id Contact ID
 * @returns The contact with the given ID, or undefined if not found
 */
export const getContactById = (id: string): Contact | undefined => {
  return contacts.find(contact => contact.id === id);
};

/**
 * Update a contact by ID.
 * @param id Contact ID
 * @param updatedContact Updated contact data
 * @returns The updated contact, or undefined if not found
 */
export const updateContact = (id: string, updatedContact: Omit<Contact, 'id'>): Contact | undefined => {
  const contactIndex = contacts.findIndex(contact => contact.id === id);
  if (contactIndex !== -1) {
    contacts[contactIndex] = { id, ...updatedContact };
    return contacts[contactIndex];
  }
  return undefined;
};

/**
 * Delete a contact by ID.
 * @param id Contact ID
 * @returns True if the contact was deleted, false if not found
 */
export const deleteContact = (id: string): boolean => {
  const contactIndex = contacts.findIndex(contact => contact.id === id);
  if (contactIndex !== -1) {
    contacts.splice(contactIndex, 1);
    return true;
  }
  return false;
};
