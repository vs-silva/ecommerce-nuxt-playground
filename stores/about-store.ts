export function AboutStore () {

    const about = ref({});

    async function getAboutInfo(): Promise<void> {
        about.value = await useFetch('/api/playground').data;
    }

    return {
        about,
        getAboutInfo
    };

}
