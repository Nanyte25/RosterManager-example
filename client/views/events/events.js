let isPast = ( date ) => {
  let today = moment().format();
  return moment( today ).isAfter( date );
};

Template.events.onCreated( () => {
  let template = Template.instance();
  template.subscribe( 'events' );
});


const eventsdata =  [
  { title: 'Event Title', start: '2016-03-03', end: '2016-03-03', editable: true, type: 'Corporate', guests: 50 },
  { title: 'Event Title', start: '2016-03-01', end: '2016-03-01', editable: false, type: 'Wedding', guests: 200 }
];

 /*Template.events.onRendered( () => {
  $( '#events-calendar' ).fullCalendar({
    events( start, end, timezone, callback ) {
      let data = Events.find().fetch().map( ( event ) => {
        event.editable = !isPast( event.start );
        return event;
      });

      if ( data ) {
        callback( data );
      }
    }
  });
  Tracker.autorun( () => {
    Events.find().fetch();
    $( '#events-calendar' ).fullCalendar( 'refetchEvents' );
  });
});

*/

Template.events.onRendered( () => {
  $( '#events-calendar' ).fullCalendar({
    events( start, end, timezone, callback ) { eventsdata },
    eventRender( event, element ) { eventsdata },
    dayClick( date ) {
      Session.set( 'eventModal', { type: 'add', date: date.format() } );
      $( '#add-edit-event-modal' ).modal( 'show' );
    },
    eventClick( event ) {
      Session.set( 'eventModal', { type: 'edit', event: event._id } );
      $( '#add-edit-event-modal' ).modal( 'show' );
    }
  });
});