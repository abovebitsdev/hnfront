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
        data : function (){
            return {
                methods: {
                    gtag_report_conversion(url) {
                        var callback = function () {
                            if (typeof(url) != 'undefined') {
                                window.location = url;
                            }
                        };
                        gtag('event', 'conversion', {
                            'send_to': 'AW-792986929/La1TCOKtsocBELGKkPoC',
                            'event_callback': callback
                        });
                        return false;
                    }
                }
            }
        }
    }
</script>