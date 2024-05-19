import { Request, Response } from 'express';
import * as contactService from '../services/contact-service';

/**
 * Create a new contact.
 */
export const createContact = (req: Request, res: Response): void => {
  const newContact = contactService.createContact(req.body);
  res.status(201).json(newContact);
};

/**
 * Get a contact by ID.
 */
export const getContactById = (req: Request, res: Response): void => {
  const contact = contactService.getContactById(req.params.id);
  if (contact) {
    res.status(200).json(contact);
  } else {
    res.status(404).send('Contact not found');
  }
};

/**
 * Update a contact by ID.
 */
export const updateContact = (req: Request, res: Response): void => {
  const updatedContact = contactService.updateContact(req.params.id, req.body);
  if (updatedContact) {
    res.status(200).json(updatedContact);
  } else {
    res.status(404).send('Contact not found');
  }
};

/**
 * Delete a contact by ID.
 */
export const deleteContact = (req: Request, res: Response): void => {
  const success = contactService.deleteContact(req.params.id);
  if (success) {
    res.status(204).send();
  } else {
    res.status(404).send('Contact not found');
  }
};
