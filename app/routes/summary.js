import Route from '@ember/routing/route';

export default class SummaryRoute extends Route {
    model(){
        return[
            {contentTitle: `Comparison`,
             contentText: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero facere natus minima accusantium, veniam dolor nisi dicta commodi quo ad vitae dignissimos reiciendis 
             doloremque recusandae atque consequatur voluptatem repellat beatae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, id sit? Corporis repellendus cupiditate itaque, 
             blanditiis voluptatum ducimus quae dolorem autem, eligendi enim neque placeat architecto voluptate labore. Et, atque? Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
             Hic ullam, necessitat ducimus illo praesentium iusto itaque cum, totam atque aspernatur saepe ut libero quod accusantium consequatur corrupti omnis? Odio, assumenda.`},
            {contentTitle: `This or That`,
             contentText: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque earum iure nulla! Velit, beatae fuga ipsam soluta veniam ullam, explicabo enim ducimus deleniti praesentium hic dolore nostrum necessitatibus corrupti maiores. 
             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro temporibus vero dolor reprehenderit sunt facere incidunt mollitia atque, repudiandae pariatur quae quisquam minus nulla possimus aspernatur nisi animi 
             doloribus accusamus.`},
            {contentTitle: ``, 
             contentText: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor provident odit error, sed perferendis voluptatum autem. Placeat quia sed provident, non eveniet voluptatum sapiente magni adipisci 
             laboriosam incidunt earum quod? Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit facilis sit placeat molestias nam libero tempora vero sequi dolorum laborum sed, officiis ex ipsam minima dicta doloremque 
             neque perspiciatis illo! Lorem ipsum dolor Suscipit consequuntur excepturi doloribus!`},
            {contentText:``,
             contentText: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque alias obcaecati dolore enim laborum. Iste adipisci minima, nesciunt dignissimos magnam quis aspernatur. Nostrum quae aliquam asperiores delectus a accusantium numquam? 
             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque nisi, assumenda deserunt consequuntur maiores, esse ad, dolorum quia exercitationem nulla placeat libero veritatis. Facere, vitae! Reprehenderit eaque veniam mollitia quasi?`},
            {contentTitle: ``,
             contentText: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum deserunt labore in assumenda ratione? Tempora et officiis aperiam incidunt deserunt voluptas! Provident atque fugit mollitia beatae adipisci cumque magni veritatis.`}
        ]
    }
}
