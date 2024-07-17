<img src="./examples/i_i.png" width="64" /><img src="./examples/d_d.png" width="64" /><img src="./examples/e_e.png" width="64" /><img src="./examples/n_n.png" width="64" /><img src="./examples/t_t.png" width="64" /><img src="./examples/i_i2.png" width="64" /><img src="./examples/c_c.png" width="64" /><img src="./examples/o_o.png" width="64" /><img src="./examples/n_n2.png" width="64" />

# Objectives

- identicon generation should be reliably the same, given the same user name
  - randomness is achieved via doing a quick hash of the input string, giving us a unique 32bit uint to cue off of
- identicons should bear _some_ relation to original user name string
  - by prominently featuring the first letter of the identifier string (or number, if no letters) - so 'Jon' would prominently feature a 'J', and '1_2_3' would prominently feature a '1'
- identicons should be unique to user names
  - the prominently featured glyph can be capitalized or not, serif or sans font face, and the combination of foreground and background colours are _reasonably_ unique per hash
  - e.g. strings like 'Jon' and 'John' would both feature a 'J' glyph, but might otherwise feature completely distinct text styling - this holds true for capitalization as well, 'matt' and 'Matt' are both unique 'M's.
- identicons should be readable, visually recognizeable
  - colours are brightened / darkened to comply with WCAG's recommendations for contrast ratio (level AA)
- fidelity should be preserved for various sizes (e.g. 16px favicons, 64px comment avatars, 256px profile pics, etc)
  - a single glyph is super easy to recognize at scale, font faces having already been designed for scalability
  - tweak the `size` variable in the source file to play with generated image sizes!
