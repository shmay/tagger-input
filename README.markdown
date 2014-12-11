An inline tag input field; inspired by StackOverflow's tag input; built in [Polymer][1]. To use:

```
<tagger-input label='input some tags naw...'></tagger-input>
```

You can bind/assign tags (those shown in dropdown) and selectedTags (those selected):

```
<tagger-input tags='{{tags}}' selectedTags='{{selectedTags}}'></tagger-input>
```

Demo: [http://shmay.github.io/tagger-input/](http://shmay.github.io/tagger-input/)

To run locally:

* clone the repo in an empty directory (see next bullet for reasons) & cd into it
* run `bower install` (will install all packages in the parent directory!)
* ` cd ..` then `python -m SimpleHTTPServer` and navigate to dir

[1]: https://www.polymer-project.org/
