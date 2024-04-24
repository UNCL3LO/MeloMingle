import { Link } from "react-router-dom";

interface Friend{
    Name:string;
    Playlist: string[];
}
function Friends(){
    const friends: Friend[]=[
        {Name:"Laura", Playlist:["lAura 1"]},
        {Name:"Kelvin", Playlist:["Mi friendem","HipHop"]},
        {Name:"Astra", Playlist:["Bongo","Sherehe"]},
        {Name:"Monicaa", Playlist:["Lofi"]},
        {Name:"Laura", Playlist:["lAura 1"]},
        {Name:"Kelvin", Playlist:["Mi friendem","HipHop"]},
        {Name:"Astra", Playlist:["Bongo","Sherehe"]},
        {Name:"Monicaa", Playlist:["Lofi"]},
        {Name:"Laura", Playlist:["lAura 1"]},
        {Name:"Kelvin", Playlist:["Mi friendem","HipHop"]},
        {Name:"Astra", Playlist:["Bongo","Sherehe"]},
        {Name:"Monicaa", Playlist:["Lofi"]},

    ]
    return(

        <div>
            {friends.map((friends:Friend, index: number ) =>(
            <div className="FriendDetails" key={index}>
                    <div className="FriendTitles">
                    <img src="/a0dca7bc21d8768ed011f00d5da1857d.gif"></img>
                    <h3>{friends.Name}</h3>
                    <p>Listening to....</p><br/>
                   
                   <p>{friends.Playlist.join(', ')}<br/></p>
                    </div>
                    
</div>

            ))}


</div>
    
    )
}
export default Friends;