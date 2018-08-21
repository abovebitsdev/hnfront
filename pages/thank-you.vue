<template>
    <section>
        <div class="hnn">
            <div class="hnn__yellow_hero">
                <h2 class="h1">Your application has been submitted. Thank you!</h2>
            </div>
        </div>
    </section>
</template>
<script>
    export default {
        mounted(){
            console.log('mounted detected');
            var callback = function () {
                if (typeof(url) != 'undefined') {
                    window.location = url;
                }
            };
            console.log('gtag event');
            gtag('event', 'conversion', {
                'send_to': 'AW-792986929/La1TCOKtsocBELGKkPoC',
                'event_callback': callback
            });
        }
    }
</script>