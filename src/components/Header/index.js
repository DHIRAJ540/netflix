import React, {useState} from 'react';
import {Link as ReactRouterLink} from 'react-router-dom';
import {PlayButton,Search,SearchIcon, SearchInput, Background,Picture,Profile,Dropdown, Container,Group, Logo, ButtonLink, Feature, Text,Link, FeatureCallOut} from './styles/header'

export default function Header ({bg = true, children, ...restProps}) {
    
    return bg ? <Background {...restProps}>{children}</Background> : children;
}

Header.Frame = function HeaderFrame({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

Header.Group = function HeaderGroup({children, ...restProps}) {
    return <Group {...restProps}>{children}</Group>
}

Header.Profile = function HeaderProfile({children, ...restProps}) {
    return <Profile {...restProps}>{children}</Profile>
}

Header.Feature = function HeaderFeature({children, ...restProps}) {
    return <Feature {...restProps}>{children}</Feature>
}

Header.Picture = function HeaderPicture({src, ...restProps}) {
    return <Picture src = {`images/users/${src}.png`} {...restProps}/>
}

Header.Text = function HeaderText({children, ...restProps}) {
    return <Text {...restProps}>{children}</Text>
}

Header.TextLink = function HeaderTextLink({children, ...restProps}) {
    return <Link {...restProps}>{children}</Link>
}

Header.FeatureCallOut = function HeaderFeatureCallOut({children, ...restProps}) {
    return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>
}

Header.ButtonLink = function HeaderButtonLink({children, ...restProps}) {
    return <ButtonLink {...restProps}>{children}</ButtonLink>
}

Header.PlayButton = function HeaderPlayButton({children, ...restProps}) {
    return <PlayButton {...restProps}>{children}</PlayButton>
}

Header.Dropdown = function HeaderDropdown({children, ...restProps}) {
    return <Dropdown {...restProps}>{children}</Dropdown>
}

Header.Search = function HeaderSearch({searchTerm, setSearchTerm, ...restProps}){
    const [searchActive, setSearchActive] = useState(false);

    return(
        <Search {...restProps}>
            <SearchIcon onClick = {() => setSearchActive(!searchActive)}>
                <img src="/images/icons/search.png" alt="Search" />
            </SearchIcon>
                <SearchInput active = {searchActive} value = {searchTerm} onChange = {({target}) => setSearchTerm(target.value)} placeholder = "Search films and series"  ></SearchInput>
        </Search>
    )
}

Header.Logo = function HeaderLogo({to, ...restProps}) {
    return(
        <ReactRouterLink to = {to} {...restProps}>
            <Logo {...restProps}/>
        </ReactRouterLink>
    )
}

