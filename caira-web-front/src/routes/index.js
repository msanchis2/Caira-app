import React from "react";
import MainLayout from "layout/MainLayout";
import {
  Switch,
  Route
} from "react-router-dom";
import Dashboard from "views/dashboard/Default";
import Authentication from "pages/Authentication";
import NotAuthorized from "views/utilities/NotAuthorized";
import Feed from "views/feed";
import SocialProfile from "views/social-profile";

const Index = () => {
  
  return (
    
    <div>

          <Switch>

              <Route exact path='/' component={ Authentication } />
              <Route exact path='/not-authorized' component={ NotAuthorized } />

              <MainLayout>
                  
                  <Route exact path='/dashboard' component={ Dashboard } />

                  <Route exact path='/feed' component={ Feed } />

                  <Route exact path='/account/profile' component={ SocialProfile } />
              
              </MainLayout>
            
          </Switch>

    </div>

  );

};

export default Index;