import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import {  shoe4, shoe5, shoe6, shoe7, jackie, jordi, perera, habib, hayden, hero1, hero2, hero3 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#PopularProducts", label: "Projects" },
    { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
    {
        thumbnail: hero1,
        bigShoe: hero1,
    },
    {
        thumbnail: hero2,
        bigShoe: hero2,
    },
    {
        thumbnail: hero3,
        bigShoe: hero3,
    },
];

export const statistics = [
    { value: '450,000+', label: 'Users' },
    { value: '100+', label: 'Qubits' },
    { value: ' up to 1000 times ', label: 'Energy Efficiency' },
];

export const products = [
    {
        imgURL: shoe4,
        name: "Nike Air Jordan-01",
        price: "$200.20",
    },
    {
        imgURL: shoe5,
        name: "Nike Air Jordan-10",
        price: "$210.20",
    },
    {
        imgURL: shoe6,
        name: "Nike Air Jordan-100",
        price: "$220.20",
    },
    {
        imgURL: shoe7,
        name: "Nike Air Jordan-001",
        price: "$230.20",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: perera,
        customerName: 'Gracelia Perera',
        rating: 4.5,
        feedback: "Navigating through the advancement of Quantum has exposed me to other crucial technologies the industry utilizes."
    },
    {
        imgURL: jordi,
        customerName: 'Jordi Banuelos',
        rating: 4.5,
        feedback: "I'm currently a junior at Northeastern Illinois University, majoring in Computer Science. I have a passion for technology and I'm always looking for ways to learn more."
    },
    {
        imgURL: jackie,
        customerName: 'Jacqueline Landi',
        rating: 4.5,
        feedback: "Navigating through the advancement of Quantum has exposed me to other crucial technologies the industry utilizes."
    },
    {
        imgURL: habib,
        customerName: 'Habib jones',
        rating: 4.5,
        feedback: "Navigating through the advancement of Quantum has exposed me to other crucial technologies the industry utilizes."
    },
    {
        imgURL: hayden,
        customerName: 'Hayden bill',
        rating: 4.5,
        feedback: "Navigating through the advancement of Quantum has exposed me to other crucial technologies the industry utilizes."
    },

];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Air Force 1", link: "/" },
            { name: "Air Max 1", link: "/" },
            { name: "Air Jordan 1", link: "/" },
            { name: "Air Force 2", link: "/" },
            { name: "Nike Waffle Racer", link: "/" },
            { name: "Nike Cortez", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "Quantum@neiu.com", link: "Quantum@neiu.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];
