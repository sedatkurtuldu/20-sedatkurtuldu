// src/mocks/handlers.ts
import { http, HttpResponse } from "msw";
import { getBaseUrl } from "./utils";

export const handlers = [

  http.get(`${getBaseUrl()}/users`, async () => {
    
    const users =  [
      {"id":"diZqYcp7jZFn8qUgOalE","userName":"Yaren","password":"12345678"},
      {"id":"mfU12DAF67QIooMG9Et0","userName":"Cankat","password":"1234567"},
      {"id":"roCGOruDxAf1Aa9CXaJi","userName":"Sedat","password":"123456"}
    ];

    return HttpResponse.json(users, { status: 200 });
  }),

];
