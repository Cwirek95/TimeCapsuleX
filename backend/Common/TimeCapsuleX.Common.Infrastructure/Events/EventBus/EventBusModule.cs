using Microsoft.Extensions.DependencyInjection;

namespace TimeCapsuleX.Common.Infrastructure.Events.EventBus;

internal static class EventBusModule
{
    internal static IServiceCollection AddEventBus(this IServiceCollection services) =>
        services.AddInMemoryEventBus();
}
