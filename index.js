//variables
const tweetList =document.getElementById('tweet-list');

//event listeners


eventListener();

function eventListener( )
{
   //form submission
document.querySelector('#form').addEventListener('submit',newTweet);
    // removw tweet from the list
     tweetList.addEventListener('click',removeTweet);
    //Document
    document.addEventListener('DOMContentLoaded',localStorageOnLoad);
}





//functions
 function newTweet(e){
     e.preventDefault();
     //read the value
     const tweet = document.getElementById('tweet').value;
     // create the remove button
      const removeBtn = document.createElement('a');
     removeBtn.classList = 'remove-tweet';// class create hui remove list name se
     removeBtn.textContent = 'X';
     
     
     
     
     //create  an <li element>
     const li = document.createElement('li');
     li.textContent = tweet;
    // tweetList.appendChild(li); append child q lagaya
     
     
     
     
     
     // add the remove button to each tweet
     li.appendChild(removeBtn);
     //add to the list
     tweetList.appendChild(li);
     
     //add to local storage
      addTweetLocalStorage(tweet);
     //add the alert
     alert('tweet added');
     //this.reset();
 }
function removeTweet(e){
    if(e.target.classList.contains('remove-tweet'))
    {e.target.parentElement.remove();//we r on the anchor tag and to remove the list we have to reach at the li tag that's why uses parentElement
        // target the element that was pressed
    } 
    //add remove from storage
    
   removeTweetLocalStorage(e.target.parentElement.textContent);
} 
//add into local storage
function addTweetLocalStorage(tweet){
   let tweets = getTweetsFromStorage();
    
    //add the tweet into the array
    
    tweets.push(tweet);
    // covert into string and store in ls
     localStorage.setItem('tweets',JSON.stringify(tweets));
  }
function getTweetsFromStorage(){
    let tweets;
     const tweetsLS = localStorage.getItem('tweets');
     // get the values , if the null is returned then we build an empty array
    if(tweetsLS === null)
        {
            tweets = [];
            }
    else
        {
            tweets = JSON.parse(tweetsLS);// we will build the array of the values of tweets
        }
    return tweets;
}
// print local storage tweets on load
function localStorageOnLoad(){
    let tweets = getTweetsFromStorage();
    //console.log(tweets);
    // loop through storage and then print the values
    tweets.forEach(function(tweet){
              const removeBtn = document.createElement('a');
     removeBtn.classList = 'remove-tweet';// class create hui remove list name se
     removeBtn.textContent = 'X';
     
     
     
     
     //create  an <li element>
     const li = document.createElement('li');
     li.textContent = tweet;
     //tweetList.appendChild(li); append child q lagaya
     
     
     
     
     
     // add the remove button to each tweet
     li.appendChild(removeBtn);
     //add t the list
     tweetList.appendChild(li);
        
    });
    
}
// removes the tweet from local storae
 function removeTweetLocalStorage(tweet){
     //get tweets from storage
     let tweets =  getTweetsFromStorage(); 
     //remove x from thetweet
     const tweetDelete = tweet.substring(0,tweet.length-1);
     //lopp through the tweet and remove the tweet
     tweets.forEach(function(tweetLS,index){
         if(tweetDelete === tweetLS)
             {
                 tweets.splice(index,1);//how many element you want to delete i.e. one  
             }
     });
     
     //save the data
     localStorage.setItem('tweets',JSON.stringify(tweets));
 }