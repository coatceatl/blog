import 'bootstrap';
import $ from 'jquery';
import Masonry from 'masonry-layout';
import jQueryBridget from 'jquery-bridget';

jQueryBridget('masonry', Masonry, $);

$(document).ready(function() {
 $('.grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    gutter: 10,
    percentPosition: true
  });
});


