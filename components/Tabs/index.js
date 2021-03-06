// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const tabTopic = document.querySelector(".topics");

const tabs = data => {
  const topic = document.createElement("div");

  topic.classList.add("tab");

  topic.textContent = data;

  return topic;
};

axios
  .get("https://lambda-times-backend.herokuapp.com/topics")
  .then(response => {
    const arr = response.data.topics;
    // console.log("sprint data", arr);
    arr.forEach(topic => {
    //   console.log("topic", topic);
      tabTopic.appendChild(tabs(topic));
    });
  })
  .catch(error => {
    console.log("CUSTOM ERROR MESSAGE GOES HERE", error);
  });
