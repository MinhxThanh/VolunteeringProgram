package edu.home.common.create;
import edu.home.entity.Role;
public class InfoBasic {
    public Role createInfoGuestRoleOfTableRole(){
        Role role = new Role();
        role.setId("GUEST");
        role.setName("Guests");
        return role;
    }

    public Role createInfoUserRoleOfTableRole(){
        Role role = new Role();
        role.setId("USER");
        role.setName("Users");
        return role;
    }
}
