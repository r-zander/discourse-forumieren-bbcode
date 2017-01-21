import { registerOption } from 'pretty-text/pretty-text';
import { builders } from 'pretty-text/engines/discourse-markdown/bbcode';

registerOption((siteSettings, opts) => opts.features["forumieren-bbcode"] = true);

export function setup(helper) {

  helper.whiteList([
    'div.bbcode-justify',
    'sub.bbcode-sub',
    'sup.bbcode-sup',
    'h2.bbcode-h2',
    'h3.bbcode-h3',
    'h4.bbcode-h4',
    'hr.bbcode-hr'
  ]);

  const { register, replaceBBCode, rawBBCode, replaceBBCodeParamsRaw } = builders(helper);

  replaceBBCode("justify", contents => ['div', {'style': "text-align:justify", 'class': 'bbcode-justify'}].concat(contents));

  replaceBBCode("sub", contents => ['sub', {'class': 'bbcode-sub'}].concat(contents));
  replaceBBCode("sup", contents => ['sup', {'class': 'bbcode-sup'}].concat(contents));

  /* Headings */
  replaceBBCode("h2", contents => ['h2', {'class': 'bbcode-h2'}].concat(contents));
  replaceBBCode("h3", contents => ['h3', {'class': 'bbcode-h3'}].concat(contents));
  replaceBBCode("h4", contents => ['h4', {'class': 'bbcode-h4'}].concat(contents));

  replaceBBCode("hr", contents => ['h4', {'class': 'bbcode-hr'}].concat(contents));
}
