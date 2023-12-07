package com.dojocart.backend.entity;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.TypeBinderType;

@Entity
@Data
@Table(name = "users")
public class UserEntity {
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
   private long id;
   private String firstName;
   private String lastName;
   private String emailId;
   private Long phoneNumber;

}


