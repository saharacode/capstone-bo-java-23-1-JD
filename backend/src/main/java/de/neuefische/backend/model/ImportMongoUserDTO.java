package de.neuefische.backend.model;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ImportMongoUserDTO{
    private String username;
    private String fullname;
    private String email;
    private String homecity;
    private String password;
}
