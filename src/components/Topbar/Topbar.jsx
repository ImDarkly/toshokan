import { Button, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import { LogoIcon } from "../../assets/icons/logoIcon";
import { Logout } from "../../assets/icons/Logout";

const Topbar = () => {
    return (
        <Navbar className="bg-slate-100" position="static">
            <NavbarBrand>
                <LogoIcon />
            </NavbarBrand>
            <NavbarBrand className="justify-center">
                <p className="font-medium text-2xl text-inherit">Toshokan</p>
            </NavbarBrand>
            <NavbarContent justify="end">
                <NavbarItem>
                    <Button isIconOnly as={Link} color="danger" href="#" variant="light">
                        <Logout />
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
}

export default Topbar;