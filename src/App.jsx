import React from 'react'
import Card from './components/Card'

const App = () => {

  const profiles = [
  {
    image: "https://images.unsplash.com/photo-1772394412832-98a1a92aff69?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Natasha Romanoff",
    description: "I focus on clarity and emotional connection.",
    rating: 4.8,
    earned: "45k+",
    rate: "$50/hr"
  },
  {
    image: "https://images.unsplash.com/photo-1675108251274-96a67b409c46?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8",
    name: "John Carter",
    description: "I build responsive and modern websites.",
    rating: 4.6,
    earned: "30k+",
    rate: "$40/hr"
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1732117940132-7521ea755dc9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI4fHx8ZW58MHx8fHx8",
    name: "Emma Watson",
    description: "I design clean and user-friendly interfaces.",
    rating: 4.9,
    earned: "60k+",
    rate: "$65/hr"
  },
  {
    image: "https://images.unsplash.com/photo-1647250698964-d7b17fe74288?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
    name: "David Miller",
    description: "I create secure and scalable APIs.",
    rating: 4.7,
    earned: "55k+",
    rate: "$70/hr"
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1726930176874-96c2dc7c671d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Sophia Lee",
    description: "I create creative branding visuals.",
    rating: 4.5,
    earned: "25k+",
    rate: "$35/hr"
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1770952278800-1961fac1470d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D",
    name: "Liam Brown",
    description: "I develop complete web applications.",
    rating: 4.8,
    earned: "80k+",
    rate: "$75/hr"
  },
  {
    image: "https://images.unsplash.com/photo-1771199918850-b66326cbccf5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Olivia Davis",
    description: "I design digital products people love.",
    rating: 4.7,
    earned: "50k+",
    rate: "$60/hr"
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1733267044564-aef1e85e56a9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D",
    name: "Noah Wilson",
    description: "I build fast and smooth mobile apps.",
    rating: 4.6,
    earned: "40k+",
    rate: "$45/hr"
  },
  {
    image: "https://images.unsplash.com/photo-1772039342538-545ba80f447d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI1fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
    name: "Ava Martinez",
    description: "I design modern and stylish websites.",
    rating: 4.9,
    earned: "70k+",
    rate: "$68/hr"
  },
  {
    image: "https://images.unsplash.com/photo-1699665350016-c59f70615683?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "James Anderson",
    description: "I solve real-world problems with code.",
    rating: 4.8,
    earned: "90k+",
    rate: "$80/hr"
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1734388423075-4a8d89152020?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",
    name: "Mia Johnson",
    description: "I design user-friendly mobile interfaces.",
    rating: 4.8,
    earned: "42k+",
    rate: "$60/hr"
  },
  {
    image: "https://images.unsplash.com/photo-1653709157588-fce65ebd569a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8",
    name: "Alex Morgan",
    description: "I create modern and clean UI designs.",
    rating: 4.7,
    earned: "38k+",
    rate: "$55/hr"
  }
];

  return (
    <div className="app">
      {profiles.map(function(profile) {
        return <Card image = {profile.image} name = {profile.name} description = {profile.description} rating = {profile.rating} earned = {profile.earned} rate = {profile.rate} />;
      })}
    </div>
      
  )
}

export default App

