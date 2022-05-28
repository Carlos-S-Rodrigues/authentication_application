# authentication_application

notes for  insonminia
=============================================================

localhost:4000/github


Create new enviroment
create new request POST name Authenticate User _.baseURL/authenticate JSON {"code":"(code from localhost:4000/github)"}
create new request POST name Create Message _.baseURL/message  JSON {"message":"message test"} => Bearer => paste token from github
create new request GET name Profile Usere _.baseURL/profile  => Bearer => paste token from github

