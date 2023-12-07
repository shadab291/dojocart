package com.dojocart.backend.entity;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.TypeBinderType;

@Entity
@Data
@Table(name = "contact")
public class ContactEntity {
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    private String email;
    private String message;
    private String location;
    private String phoneNumber;
    private String address;

}


