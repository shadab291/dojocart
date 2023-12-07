package com.dojocart.backend.model;

import lombok.Data;

@Data
public class Contact {
    private long id;
    private String name;
    private String email;
    private String message;
    private String location;
    private String phoneNumber;
    private String address;
    // Add other fields relevant to Contact information
}