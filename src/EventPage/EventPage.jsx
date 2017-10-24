import React, {Component} from 'react';
import NavBar from '../NavBar.jsx';
import EventPage_Banner from './EventPage_Banner.jsx';
import EventPage_Menu from './EventPage_Menu.jsx';
import EventPage_Review from './EventPage_Review.jsx';


class EventPage extends Component {

  constructor(props){
    super(props);
    this.state = {
      events: {
        title: "",
        capacity: "",
        price: "",
        description: "",
        date: "",
        menu: "",
      }
    }
  }

  componentDidMount(){

    const getEventDetail = () => {
      const options = {  
        weekday: "long", year: "numeric", month: "short",  
        day: "numeric", hour: "2-digit", minute: "2-digit"  
      };
      $.ajax({
        method: "GET",
        url: "/api/events",
        success: data => {
          this.setState({
            events: {
              title: data[0].title,
              capacity: data[0].capacity,
              price: data[0].price,
              description: data[0].description,             
              date: data[0].event_date,
              menu: data[0].menu_description,
            }
          })
        }
      })
    };
    getEventDetail();

  }

  render() {
    return (
      <div>
        <NavBar />
        <EventPage_Banner 
        title={this.state.events.title}
        capacity={this.state.events.capacity}
        price={this.state.events.price}
        description={this.state.events.description}
        date={this.state.events.date}
         />   
        <EventPage_Menu 
        menu={this.state.events.menu}
        />
        <EventPage_Review />
      </div>
     
    );
  }
}

export default EventPage;