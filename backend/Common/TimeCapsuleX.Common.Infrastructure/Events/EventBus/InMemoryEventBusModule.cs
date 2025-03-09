using Microsoft.Extensions.DependencyInjection;

namespace TimeCapsuleX.Common.Infrastructure.Events.EventBus;

public static class InMemoryEventBusModule
{
    public static IServiceCollection AddInMemoryEventBus(this IServiceCollection services)
    {
        services.AddScoped<IEventBus, InMemoryEventBus>();

        return services;
    }
}
