import React from 'react';

import Header from '../header/header';
import Body from '../body/body';
import Footer from '../footer/footer';

import { Collapsible, CollapsibleItem } from 'react-materialize';

class Website extends React.Component {
  render() {
    // return (
    //   <Collapsible>
    //       <CollapsibleItem header='First' icon='filter_drama'>
    //         Lorem ipsum dolor sit amet.
    //       </CollapsibleItem>
    //       <CollapsibleItem header='Second' icon='place'>
    //         Lorem ipsum dolor sit amet.
    //       </CollapsibleItem>
    //       <CollapsibleItem header='Third' icon='whatshot'>
    //         Lorem ipsum dolor sit amet.
    //       </CollapsibleItem>
    //     </Collapsible>
    // );

    return (
      <React.Fragment>
              <div class="collection">
        <a href="#!" class="collection-item">Alvin</a>
        <a href="#!" class="collection-item active">Alvin</a>
        <a href="#!" class="collection-item">Alvin</a>
        <a href="#!" class="collection-item">Alvin</a>
      </div>
        <main>
          <Header />
          <Body />
        </main>
        <Footer />
      </React.Fragment>
    )
  }
}

export default Website;