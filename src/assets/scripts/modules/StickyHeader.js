/* eslint-disable no-undef, no-new, no-unused-vars */
import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class StickyHeader {
  constructor() {
    this.lazyImages = $('.lazyload');
    this.siteHeader = $('.site-header');
    this.headerTriggerElement = $('.large-hero__title');
    this.createHeaderWaypoint();
    this.refreshWaypoints();
  }

  refreshWaypoints() {
    this.lazyImages.on('load', () => {
      Waypoint.refreshAll();
    });
  }

  createHeaderWaypoint() {
    const that = this;
    new Waypoint({
      element: that.headerTriggerElement[0],
      handler(direction) {
        if (direction === 'down') {
          that.siteHeader.addClass('site-header--dark');
        } else {
          that.siteHeader.removeClass('site-header--dark');
        }
      }
    });
  }
}

export default StickyHeader;

