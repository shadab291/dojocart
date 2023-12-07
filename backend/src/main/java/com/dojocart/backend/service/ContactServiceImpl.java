package com.dojocart.backend.service;

import com.dojocart.backend.entity.ContactEntity;
import com.dojocart.backend.model.Contact;
import com.dojocart.backend.repository.ContactRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

@Service
public class ContactServiceImpl implements ContactService {

    private final ContactRepository contactRepository;

    public ContactServiceImpl(ContactRepository contactRepository) {
        this.contactRepository = contactRepository;
    }

    @Override
    public Contact createContact(Contact contact) {
        ContactEntity contactEntity = new ContactEntity();
        BeanUtils.copyProperties(contact, contactEntity);
        contactRepository.save(contactEntity);
        return contact;
    }
    // Implement other contact-related methods if needed
}
