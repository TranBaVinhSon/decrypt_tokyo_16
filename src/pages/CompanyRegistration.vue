<template lang="html">

<body>
     <section class="section">
        <div class="columns">
           <div class="column is-4 is-offset-4">
             <br>
             <h1 id="responsive">Register Line and Hour</h1>
             <br>
              <div class="field">
                 <label class="label">Line</label>
                 <div class="control">
                    <div class="select">
                       <select>
                          <option>Yamanote</option>
                          <option>Tokaido</option>
                          <option>Chuo</option>
                          <option>Sobu</option>
                          <option>Keiyo</option>
                       </select>
                    </div>
                 </div>

              </div>
              <div class="field">
                 <label class="label">Hour From</label>
                 <div class="control">
                    <div class="select">
                       <select>
                          <option>7:00</option>
                          <option>8:00</option>
                          <option>9:00</option>
                          <option>10:00</option>
                          <option>11:00</option>
                          <option>12:00</option>
                          <option>13:00</option>
                          <option>14:00</option>
                          <option>15:00</option>
                          <option>16:00</option>
                          <option>17:00</option>
                          <option>18:00</option>
                          <option>19:00</option>
                          <option>20:00</option>
                       </select>
                    </div>
                 </div>
              </div>
              <div class="field">
                 <label class="label">Hour To</label>
                 <div class="control">
                    <div class="select">
                       <select>
                          <option>7:00</option>
                          <option>8:00</option>
                          <option>9:00</option>
                          <option>10:00</option>
                          <option>11:00</option>
                          <option>12:00</option>
                          <option>13:00</option>
                          <option>14:00</option>
                          <option>15:00</option>
                          <option>16:00</option>
                          <option>17:00</option>
                          <option>18:00</option>
                          <option>19:00</option>
                          <option>20:00</option>
                       </select>
                    </div>
                 </div>
              </div>
              <div class="field is-grouped">
                 <div class="control">
                    <button class="button is-link">Submit</button>
                 </div>
              </div>
           </div>
        </div>
             <div class="column is-4 is-offset-4">
               <h1 id="responsive">Registered List</h1>
               <br>
               <table class="table is-responsive">
                 <thead>

<tr>
                     <th>No.</th>
                     <th>Line</th>
                     <th>From</th>
                     <th>To</th>
                     <th>Action</th>
                   </tr>
                 </thead>
                 <tbody>
                   <tr>
                     <td>1</td>
                     <td>Yamanote</td>
                     <td>6:00</td>
                     <td>7:00</td>
                     <td><button class="button is-link">Delete</button></td>
                   </tr>
                   <tr>
                     <td>2</td>
                     <td>Yokosuka</td>
                     <td>17:00</td>
                     <td>18:00</td>
                     <td><button class="button is-link">Delete</button></td>
                   </tr>
                   <tr>
                     <td>3</td>
                     <td>Chuo</td>
                     <td>6:00</td>
                     <td>7:00</td>
                     <td><button class="button is-link">Delete</button></td>
                   </tr>
                   <tr>
                     <td>4</td>
                     <td>Sobu</td>
                     <td>7:00</td>
                     <td>8:00</td>
                     <td><button class="button is-link">Delete</button></td>
                   </tr>
                   <tr>
                     <td>5</td>
                     <td>Tokaido</td>
                     <td>6:00</td>
                     <td>7:00</td>
                     <td><button class="button is-link">Delete</button></td>
                   </tr>
                 </tbody>
               </table>
             <nav class="pagination" role="navigation" aria-label="pagination">
               <a class="pagination-previous" title="This is the first page" disabled>Previous</a>
               <a class="pagination-next">Next page</a>
               <ul class="pagination-list">
                 <li>
                   <a class="pagination-link is-current" aria-label="Page 1" aria-current="page">1</a>
                 </li>
                 <li>
                   <a class="pagination-link" aria-label="Goto page 2">2</a>
                 </li>
                 <li>
                   <a class="pagination-link" aria-label="Goto page 3">3</a>
                 </li>
               </ul>
             </nav>
   </div>
     </section>
  </body>

</template>

<script>

export default {
 name: 'CompanyRegistration'
}

</script>

<style lang="css">
</style>