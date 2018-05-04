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
        guessedImages: []
    };

    removeFriend = id => {

        //get a copy of the array of ids (guessedImages) from this.state
        const guessedImages = this.state.guessedImages;
        //then push the latest id onto it
        guessedImages.push(id);

        /*
            // Filter this.state.friends for friends with an id not equal to the id being removed
            const friends = this.state.friends.filter(friend => friend.id !== id);
            // Set this.state.friends equal to the new friends array
            this.setState({ friends, guessedImages }, () => console.log(this.state));
        */
        const friends = this.state.friends;

        for (let i = friends.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [friends[i], friends[j]] = [friends[j], friends[i]];
        }


        /*
            function shuffleArray(array) {
                for (let i = array.length - 1; i > 0; i--) {
                    let j = Math.floor(Math.random() * (i + 1));
                    [array[i], array[j]] = [array[j], array[i]];
                }
            }
        */

        this.shuffleFriend();


        this.setState({ friends, guessedImages }, () => console.log(this.state));

    };

    shuffleFriend = id => {

    };


    // Map over this.state.friends and render a FriendCard component for each friend object
    render() {
        return ( <
            Wrapper >
            <
            Title > Friends List < /Title> {
                this.state.friends.map(friend => ( <
                    FriendCard removeFriend = { this.removeFriend } id = { friend.id } key = { friend.id } name = { friend.name } image = { friend.image } occupation = { friend.occupation } location = { friend.location }
                    />
                ))
            } <
            /Wrapper>
        );
    }
}

export default App;