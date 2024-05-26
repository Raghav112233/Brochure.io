const handleSubmit = (event) => {
    event.preventDefault();
  }
function Form() {
  return (
    <form id="customize_box" method="get" action="script.js" onSubmit={handleSubmit}>
            <div id="labels">
                <div class="label">
                    <p>Brochure Tone</p>
                    <select name="tone" id="tone">
                        <option value="casual">Casual</option>
                        <option value="formal">Formal</option>
                        <option value="grandiose">Grandiose</option>
                    </select>
                </div>
                <div class="label">
                    <p>Brochure Length</p>
                    <select name="length" id="length">
                        <option value="short">Short (4 to 6 sentences)</option>
                        <option value="medium">Medium (8 to 10 sentences)</option>
                        <option value="long">Long (15 to 20 sentences)</option>
                    </select>
                </div>
            </div> 
            <div class="inputs">
                <p>Brand Positioning</p>
                <input type="text" id="brand_pos" required name="brand_pos" />
            </div>
            <div class="inputs">
                <p>Property Features</p>
                <input type="text" id="prop_feat" required name="prop_feat" />
            </div>
            <button type="submit" class="btn-generate">Generate Now&#129668;</button>
    </form>
  );
}

export default Form;