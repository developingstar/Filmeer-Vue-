<template>
  <div class = "body">
    <div class = "body-top">
      
      <div class = "ad-pic">        
      </div>
    </div>
    <div class = "clear"></div>
    <div>
      <tabs>
          <tab name="ad campaigns">
            <div class="analyze" style = "height:600px;" v-if="view_campaign_flag == false">
              <table class = "tbl-analyze" style = "margin-top:0;">
                  <thead>        
                    <tr>             
                      <th class = "category">&nbsp;</th>
                      <th class = "status">status</th>
                      <th class = "duration">duration</th>
                      <th class = "views">views</th>
                      <th class = "clicks">clicks</th>
                      <th class = "budget">budget</th>
                    </tr>
                  </thead>
                  <tbody>
                      <tr v-on:click="viewCampaign()">
                          <td>My ad campaign 1</td>
                          <td>on</td>
                          <td>17 days</td>
                          <td>314</td>
                          <td>28</td>
                          <td>1200cr(12$USD)</td>
                      </tr>
                      <tr>
                          <td>second ad campaign </td>
                          <td>pause</td>
                          <td>24 days</td>
                          <td>971</td>
                          <td>142</td>
                          <td>3700cr(37$USD)</td>
                      </tr>
                       <tr>
                          <td>3-rd ad campaign</td>
                          <td>&nbsp;</td>
                          <td></td>
                          <td>&nbsp;</td>
                          <td>&nbsp;</td>
                          <td>&nbsp;</td>
                      </tr>
                      <tr>
                          <td>my limited time ad campaign</td>
                          <td>&nbsp;</td>
                          <td></td>
                          <td>&nbsp;</td>
                          <td>&nbsp;</td>
                          <td>&nbsp;</td>
                      </tr>
                      <tr>
                          <td>fifth ad campaign custom</td>
                          <td>&nbsp;</td>
                          <td></td>
                          <td>&nbsp;</td>
                          <td>&nbsp;</td>
                          <td>&nbsp;</td>
                      </tr>
                      <tr>
                          <td>new campaign</td>
                          <td>&nbsp;</td>
                          <td></td>
                          <td>&nbsp;</td>
                          <td>&nbsp;</td>
                          <td>&nbsp;</td>
                      </tr>
                      <tr>
                          <td>my recently added campaign</td>
                          <td>&nbsp;</td>
                          <td></td>
                          <td>&nbsp;</td>
                          <td>&nbsp;</td>
                          <td>&nbsp;</td>
                      </tr>
                  </tbody>
              </table>              
              <div class = "clear"></div>
              <table class = "tbl-credit">
                  <tbody>
                      <tr>
                          <td style = "text-align:center;color:#000;">available credits: 2400(24 $USD)</td>                          
                      </tr>
                  </tbody>
              </table>
              <div class = "clear"></div>
              <table class = "tbl-credit">
                  <tbody>
                      <tr>
                          <td style = "text-align:center;width:75%;color:#000;">500 Credits  (5 $USD)</td>       
                          <td style = "width: 25%; text-align:left;color:#0050a1;"> buy </td>                   
                      </tr>
                      <tr style = "background-color: #efefef;">
                          <td style = "text-align:center;width:75%;color:#000;">2000 Credits  (20 $USD)</td>       
                          <td style = "width: 25%; text-align:left;color:#0050a1;"> buy </td>                   
                      </tr>
                  </tbody>
              </table>
            </div>
            <div class = "body campaign-view" style = "height:600px;width:700px;margin:auto;" v-if="view_campaign_flag == true">
              <table class = "tbl-credit" style = "width: 40%;">
                  <tbody>
                      <tr>
                          <td style = "text-align:center;color:#000;padding:0;">campaign: <a style="padding:0;color:#0050a1;">Name</a></td>                          
                      </tr>
                  </tbody>
              </table>
              <div class = "clear"></div>
              <table class = "tbl-analyze" style = "margin-top:20px;">
                  <thead>        
                    <tr>                                   
                      <th class = "status">status</th>
                      <th class = "duration">duration</th>
                      <th class = "views">views</th>
                      <th class = "clicks">clicks</th>
                      <th class = "budget">budget</th>
                      <th class = "start-date">start date</th>
                    </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td style="color:#000; text-align:center;padding:0;">on</td>
                          <td>17 days</td>
                          <td>314</td>
                          <td>28</td>
                          <td>1200cr(12$USD)</td>
                          <td>08 JUNE 2017</td>
                      </tr>                      
                  </tbody>
              </table>

              <div class = "clear"></div>
              <table class = "tbl-analyze" style = "margin-top:20px;">
                  <thead>        
                    <tr>                                   
                      <th class = "budget">current budget</th>
                      <th class = "budget">daily budget</th>
                      <th class = "add-more">add more</th>                                            
                    </tr>
                  </thead>
                  <tbody>
                      <tr>                         
                          <td>840cr(8 $USD)</td>
                          <td>
                            <input class = "input-name" style = "width:80px;height:20px;font-size:16px;text-align:right;" value = "210">
                            <a style="font-size:16px;">[ok]</a>
                          </td>
                          <td>
                            <input class = "input-name" style = "width:80px;height:20px;font-size:16px;text-align:right;" value = "370">
                            <a style="font-size:16px;">[add credits]</a>
                          </td>                        
                      </tr>                      
                  </tbody>
              </table>
            </div>            
          </tab>
          <tab name="create">
            <div class="create-ads" style = "height:600px;">
             <div class = "campaign-create-row">
                <div class = "campaign-profile">
                  <div class = "campaign-profile-item">
                    <div class = "item-name">Campaign name</div>
                    <input class = "input-name" >
                  </div>
                   <div class = "clear"></div>
                  <div class = "campaign-profile-item">
                    <div class = "item-name">*Upload image</div>
                    <input type = "button" class = "upload-image" value="browse..." >
                  </div>
                </div>
                <div class = "campaign-profile-note" style = "font-size: 16px;">
                  <p>available credits: 2450</p>
                </div>
             </div> 
             <div class = "clear"></div>
             <div class = "campaign-create-row" style = "margin-top:15px;">
                <div class = "campaign-profile" style = "height: 115px">
                  <div class = "campaign-profile-item">
                    <div class = "item-name" style="margin-top: 1px;">Country</div>
                    <div class = "select-div" style = "float:left; width: 200px;">
                      <v-select :value.sync="selected" :options="countries"></v-select>
                    </div>
                  </div>
                  <div class = "campaign-profile-item">
                    <div class = "item-name" style="margin-top: 1px;">State/Province</div>
                    <div class = "select-div" style = "float:left; width: 200px;">
                      <v-select :value.sync="selected" :options="states"></v-select>
                    </div>
                  </div>
                  <div class = "campaign-profile-item">
                    <div class = "item-name" style="margin-top: 1px;">City</div>
                    <div class = "select-div" style = "float:left; width: 200px;">
                      <v-select :value.sync="selected" :options="cities"></v-select>
                    </div>
                  </div>                   
                </div>
                <div class = "campaign-profile-note" style = "font-size: 16px;border: 0; background: 0;">
                  <p>*Image requirements:</br>format:PNG</br>size: 250 * 70</p>
                </div>
             </div> 
             <div class = "clear"></div>
            <div class = "campaign-create-row" style = "margin-top:15px;">
              <div class = "campaign-profile" style = "height:30px; background:0;">
                <div class = "create-button">Create</div>
              </div>
            </div>
            </div>
          </tab>         
      </tabs>
  </div>
  </div>
</template>

<script>
import vSelect from "vue-select";
module.exports = {
		created: function(){	      					
		},
    components: {vSelect,
    "vue-select": require("vue-select")},
    data: function(){
      return {
        news_title: 'New Title',
        selected: null,
        countries: ['Russia','Slovakia','Norway'],
        states: ['Moscow1', 'Bratislava1', 'Oslo1'],
        cities: ['Moscow', 'Bratislava', 'Oslo'],
        result1: "",
        view_campaign_flag: false,
      }
      
    },
    methods: {
			viewCampaign() {
				this.view_campaign_flag = true;
			},
    }
}
</script>
<!-- styling for the component -->
<style>
  
</style>