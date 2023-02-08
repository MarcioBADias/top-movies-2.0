import React, { useState } from "react";
import { 
    Navbar, 
    NavbarBrand, 
    InputGroup, 
    Input, 
    Button, 
    Form
} from 'reactstrap';
  
import { 
    BiCameraMovie, 
    BiSearchAlt2 
} from 'react-icons/bi';
import { Link, useNavigate } from "react-router-dom";
import * as C from './styles'

const Header = () => {
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();

        if(!search) return;

        navigate(`/search?q=${search}`, { replace: true });
        setSearch('');

    }

    return (
        <Navbar className="py-3 px-3" color="dark" dark expand='md'>
            <NavbarBrand>
                <Link to='/'>
                    <C.Title className="px-3">
                        <BiCameraMovie/> Top Movies
                    </C.Title>
                </Link>
            </NavbarBrand>
            <Form onSubmit={handleSubmit}>
                <InputGroup>
                    <Input 
                    size="sm" 
                    placeholder="Search for a movie..."
                    onChange={e => setSearch(e.target.value)}
                    value={search}
                    />
                    <Button color='warning'>
                        <BiSearchAlt2/>
                    </Button>
                </InputGroup>
            </Form>
        </Navbar>
    )
}

export default Header;