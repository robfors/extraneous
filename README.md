# extranEouS
_extranEouS_ is a ECMAScript library that builds a framework with two goals in mind, foreign code and modularity.
## Execute foreign (non ECMAScript) code in the browser
_extranEouS_ will allow a developer to load an interpreter for their language of choice (if one has been built to work with _extranEouS_) into the bwaser. Foreign code can then be executed in the bowser just as seamlessly as ECMAScript is.
## Organize your project into modules
These modules will can have versioning and dependencies set. The idea is similar to that of [*requirejs.org*](https://requirejs.org), however, it is designed to work with modules of foreign languages. For example, a _Ruby_ library could have a specific version of a _Ruby_ interpreter and a _ECMAScript_ library it needs to be loaded first.

# Why
I build this framework as I was working on [*BRuby*](https://github.com/robfors/bruby), a project to get _Ruby_ running in the browser. The idea was that, splitting the project into components that would get loaded individually into the browser would benefit from:
* browser caching
* CDNs
* avoiding the complex process of compiling the interpreter just to change your appliaction's code

At this point in time I have no intention of building an interpreter for any other language myself but I would welcome any contributions. Feel free to open an issue if you have any questions.

# License

This project is distributed under the MIT License. See LICENSE for further details.
