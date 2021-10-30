import { Switch, Route } from "react-router-dom"
import { FAQ } from "./views/FAQ"
import { ContactPage } from "./views/ContactPage"
import { PrivacyPage } from "./views/PrivacyPage"
import { ItemsPage } from "./views/ItemsPage"
import { ItemPage } from "./views/ItemPage"

function App() {

  return (
    <div>
      <Switch>

        <Route path="/" exact></Route>

        <Route path="/shop/:id" >
          <ItemPage />
        </Route>

        <Route path="/shop" exact>
          <ItemsPage />
        </Route>
        
        <Route path="/poduct-category/:category/?:subcategory" >
          <ItemsPage />
        </Route>


        <Route path="/privacy" >
          <PrivacyPage />
        </Route>
        <Route path="/contacts">
          <ContactPage />
        </Route>
        <Route path="/faq">
          <FAQ />
        </Route>
      </Switch>
    </div>
  );
}

export {
  App
}
