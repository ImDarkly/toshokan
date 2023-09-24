import { Button, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import { LogoIcon } from "../../assets/icons/LogoIcon";
import { LogoutIcon } from "../../assets/icons/LogoutIcon";

const Topbar = () => {
    return (
        <Navbar 
            className="bg-slate-100" 
            position="static" 
            maxWidth="full"
            classNames={{
                wrapper: "px-4"
            }}
            >
            <NavbarBrand>
                <LogoIcon size={28} styles={"text-white bg-primary-400 p-1 rounded-lg"} />
            </NavbarBrand>
            <NavbarBrand className="justify-center">
                <p className="font-medium text-2xl text-inherit">Toshokan</p>
            </NavbarBrand>
            <NavbarContent justify="end">
                <NavbarItem>
                    <Button isIconOnly as={Link} color="danger" href="#" variant="light">
                        <LogoutIcon size={28} />
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
}

export default Topbar;