import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";



class App extends Component {
    // Setting this.state.friends to the friends json array
    // maintaining an array that holds the ids of all images that have been clicked

    state = {
        friends: friends,
        guessedImages: [],
        score: 0
    };

    removeFriend = id => {

        let previouslyGuessed = false;

        //get a copy of the array of ids (guessedImages) from this.state
        const guessedImages = this.state.guessedImages;
        //then push the latest id onto it
        guessedImages.push(id);

        let score = this.state.score;
        if (!previouslyGuessed) {
            score++;
        }

        const friends = this.state.friends;

        for (let i = friends.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [friends[i], friends[j]] = [friends[j], friends[i]];
        }


        this.setState({ friends, guessedImages, score }, () => console.log(this.state));

    };

    shuffleFriend = id => {

    };


    // Map over this.state.friends and render a FriendCard component for each friend object
    render() {
        return ( 
            <Wrapper>
            <Title 
            score = { this.state.score }
            />
            {
                this.state.friends.map(friend => ( 
                    <FriendCard 
                    removeFriend = { this.removeFriend } 
                    id = { friend.id } 
                    key = { friend.id } 
                    name = { friend.name } 
                    image = { friend.image } 
                    occupation = { friend.occupation } 
                    location = { friend.location }
                    />
                ))
            } 
            </Wrapper>
        );
    }
}

export default App;